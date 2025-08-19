'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  selectBlogs,
  selectBlogsLoading,
} from '@/lib/store/blogSlice';
import { AppDispatch } from '@/lib/store/store';

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

const styles = {
  container: {
    maxWidth: '1100px',
    margin: '40px auto',
    padding: '32px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
    fontFamily: 'Poppins, sans-serif',
  },
  loginBox: {
    maxWidth: '400px',
    margin: '120px auto',
    padding: '32px',
    background: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
    textAlign: 'center' as const,
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    background: '#1a73e8',
    color: '#fff',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '6px',
    fontWeight: 600,
    fontSize: '16px',
    cursor: 'pointer',
    margin: '10px 0',
    transition: 'background 0.2s',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginTop: '32px',
    fontSize: '15px',
  },
  th: {
    background: '#f2f2f2',
    padding: '12px 8px',
    border: '1px solid #e0e0e0',
    fontWeight: 600,
  },
  td: {
    padding: '10px 8px',
    border: '1px solid #e0e0e0',
    textAlign: 'left' as const,
    verticalAlign: 'middle' as const,
  },
  actionBtn: {
    marginRight: '8px',
    padding: '6px 14px',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 500,
    cursor: 'pointer',
    fontSize: '14px',
  },
  editBtn: {
    background: '#ffd600',
    color: '#333',
  },
  deleteBtn: {
    background: '#e53935',
    color: '#fff',
  },
  formSection: {
    margin: '32px 0',
    padding: '24px',
    background: '#f9f9f9',
    borderRadius: '10px',
  },
  label: {
    display: 'block',
    fontWeight: 500,
    margin: '12px 0 4px 0',
  },
  tagInput: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '15px',
    marginBottom: '8px',
  },
  sectionBox: {
    background: '#fff',
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '18px',
  },
  addSectionBtn: {
    background: '#43a047',
    color: '#fff',
    border: 'none',
    padding: '7px 18px',
    borderRadius: '6px',
    fontWeight: 500,
    fontSize: '15px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  removeSectionBtn: {
    background: '#e53935',
    color: '#fff',
    border: 'none',
    padding: '5px 12px',
    borderRadius: '5px',
    fontWeight: 500,
    fontSize: '13px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  logoutBtn: {
    background: '#e53935',
    color: '#fff',
    border: 'none',
    padding: '7px 18px',
    borderRadius: '6px',
    fontWeight: 500,
    fontSize: '15px',
    cursor: 'pointer',
    float: 'right' as const,
    marginTop: '-10px',
    marginBottom: '10px',
  }
};

type BlogSection = {
  heading: string;
  content: string;
  image: File | null;
  imagePreview: string;
  existingImageUrl: string;
};

type BlogFormProps = {
  onSubmit: (formData: FormData) => void;
  initial?: any;
  loading: boolean;
  onCancel?: () => void;
};

function BlogForm({ onSubmit, initial, loading, onCancel }: BlogFormProps) {
  // State for form fields
  const [title, setTitle] = useState<string>(initial?.title || '');
  const [slug, setSlug] = useState<string>(initial?.slug || '');
  const [category, setCategory] = useState<string>(initial?.category || '');
  const [metaDescription, setMetaDescription] = useState<string>(initial?.metaDescription || '');
  const [status, setStatus] = useState<string>(initial?.status || 'draft');
  const [featured, setFeatured] = useState<boolean>(initial?.featured || false);
  const [tags, setTags] = useState<string>(initial?.tags?.join(', ') || '');
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string>(initial?.image?.url || '');
  const [sections, setSections] = useState<BlogSection[]>(
    initial?.sections?.length
      ? initial.sections.map((sec: any) => ({
          heading: sec.heading || '',
          content: Array.isArray(sec.content) ? sec.content.join('\n') : (sec.content || ''),
          image: null,
          imagePreview: sec.image?.url || '',
          existingImageUrl: sec.image?.url || '',
        }))
      : [
          { heading: '', content: '', image: null, imagePreview: '', existingImageUrl: '' }
        ]
  );
  const [ctaButtonText, setCtaButtonText] = useState<string>(initial?.cta?.buttonText || '');
  const [ctaText, setCtaText] = useState<string>(initial?.cta?.text || '');

  // For JSON upload
  const [jsonFile, setJsonFile] = useState<File | null>(null);
  const [jsonError, setJsonError] = useState<string>('');
  const [jsonPreview, setJsonPreview] = useState<string>('');

  // Handle main image preview
  useEffect(() => {
    if (mainImage) {
      const url = URL.createObjectURL(mainImage);
      setMainImagePreview(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [mainImage]);

  // Section image preview
  const handleSectionImage = (idx: number, file: File | null) => {
    setSections(sections =>
      sections.map((sec, i) =>
        i === idx
          ? {
              ...sec,
              image: file,
              imagePreview: file ? URL.createObjectURL(file) : sec.imagePreview,
            }
          : sec
      )
    );
  };

  const handleSectionChange = (idx: number, field: keyof BlogSection, value: string) => {
    setSections(sections =>
      sections.map((sec, i) =>
        i === idx ? { ...sec, [field]: value } : sec
      )
    );
  };

  const addSection = () => {
    setSections(sections => [
      ...sections,
      { heading: '', content: '', image: null, imagePreview: '', existingImageUrl: '' }
    ]);
  };

  const removeSection = (idx: number) => {
    setSections(sections => sections.filter((_, i) => i !== idx));
  };

  // Handle JSON file upload
  const handleJsonFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJsonError('');
    setJsonPreview('');
    const file = e.target.files && e.target.files[0];
    setJsonFile(file || null);
    if (file) {
      const reader = new FileReader();
      reader.onload = evt => {
        try {
          const json = JSON.parse(evt?.target?.result as string);
          setJsonPreview(JSON.stringify(json, null, 2));
        } catch (err) {
          setJsonError('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prepare FormData
    const formData = new FormData();

    // If JSON file is uploaded, send only the JSON file
    if (jsonFile) {
      formData.append('jsonFile', jsonFile);
      onSubmit(formData);
      return;
    }

    // Build the blogData as before, but also build the "json" field as required
    const blogData = {
      title,
      slug,
      category,
      metaDescription,
      status,
      featured,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      sections: sections.map(sec => ({
        heading: sec.heading,
        content: sec.content.split('\n').map(line => line.trim()).filter(Boolean),
      })),
      cta: {
        buttonText: ctaButtonText,
        text: ctaText,
      },
    };

    const jsonField: any = {};
    jsonField[slug] = {
      id: initial?._id || '',
      title,
      image: mainImagePreview || '',
      sections: sections.map(sec => ({
        heading: sec.heading,
        content: sec.content.split('\n').map(line => line.trim()).filter(Boolean),
        image: sec.imagePreview || sec.existingImageUrl || '',
      })),
      cta: {
        buttonText: ctaButtonText,
        text: ctaText,
      },
      category,
      metaDescription,
      status,
      featured,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
    };

    formData.append('blogData', JSON.stringify(blogData));
    formData.append('json', JSON.stringify(jsonField));

    // Main image
    if (mainImage) {
      // New file upload
      formData.append('mainImage', mainImage);
    } else if (initial?.image?.url) {
      // Existing image URL (for edits)
      formData.append('mainImageUrl', initial.image.url);
    }
    // Section images
    sections.forEach((sec, idx) => {
      if (sec.image) {
        // New file upload
        formData.append(`sectionImage_${idx}`, sec.image);
      } else if (sec.existingImageUrl) {
        // Existing image URL (for edits)
        formData.append(`sectionImageUrl_${idx}`, sec.existingImageUrl);
      }
    });
    onSubmit(formData);
  };

  return (
    <form style={styles.formSection} onSubmit={handleSubmit}>
      <h3 style={{marginBottom: 12}}>{initial ? 'Edit Blog' : 'Create Blog'}</h3>
      <label style={styles.label}>Title</label>
      <input style={styles.input} value={title} onChange={e => setTitle(e.target.value)} required />

      <label style={styles.label}>Slug</label>
      <input style={styles.input} value={slug} onChange={e => setSlug(e.target.value)} required />

      <label style={styles.label}>Category</label>
      <input style={styles.input} value={category} onChange={e => setCategory(e.target.value)} />

      <label style={styles.label}>Meta Description</label>
      <textarea style={styles.input} value={metaDescription} onChange={e => setMetaDescription(e.target.value)} rows={2} />

      <label style={styles.label}>Status</label>
      <select style={styles.input} value={status} onChange={e => setStatus(e.target.value)}>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <label style={styles.label}>
        <input type="checkbox" checked={featured} onChange={e => setFeatured(e.target.checked)} style={{marginRight: 8}} />
        Featured
      </label>

      <label style={styles.label}>Tags (comma separated)</label>
      <input style={styles.input} value={tags} onChange={e => setTags(e.target.value)} />

      <label style={styles.label}>Main Image</label>
      <input
        type="file"
        accept="image/*"
        style={styles.input}
        onChange={e => {
          if (e.target.files && e.target.files[0]) {
            setMainImage(e.target.files[0]);
          }
        }}
      />
      {mainImagePreview && (
        <img src={mainImagePreview} alt="Main" style={{maxWidth: 120, margin: '8px 0', borderRadius: 6}} />
      )}

      <h4 style={{marginTop: 18}}>Sections</h4>
      {sections.map((sec, idx) => (
        <div key={idx} style={styles.sectionBox}>
          <label style={styles.label}>Heading</label>
          <input
            style={styles.input}
            value={sec.heading}
            onChange={e => handleSectionChange(idx, 'heading', e.target.value)}
            required
          />
          <label style={styles.label}>Content (one paragraph per line)</label>
          <textarea
            style={styles.input}
            value={sec.content}
            onChange={e => handleSectionChange(idx, 'content', e.target.value)}
            rows={3}
            required
          />
          <label style={styles.label}>Section Image</label>
          <input
            type="file"
            accept="image/*"
            style={styles.input}
            onChange={e => {
              if (e.target.files && e.target.files[0]) {
                handleSectionImage(idx, e.target.files[0]);
              }
            }}
          />
          {sec.imagePreview && (
            <img src={sec.imagePreview} alt="Section" style={{maxWidth: 100, margin: '6px 0', borderRadius: 5}} />
          )}
          {sections.length > 1 && (
            <button
              type="button"
              style={styles.removeSectionBtn}
              onClick={() => removeSection(idx)}
            >
              Remove Section
            </button>
          )}
        </div>
      ))}
      <button type="button" style={styles.addSectionBtn} onClick={addSection}>
        + Add Section
      </button>

      <h4 style={{marginTop: 18}}>CTA</h4>
      <label style={styles.label}>Button Text</label>
      <input style={styles.input} value={ctaButtonText} onChange={e => setCtaButtonText(e.target.value)} />
      <label style={styles.label}>CTA Text</label>
      <input style={styles.input} value={ctaText} onChange={e => setCtaText(e.target.value)} />

      <h4 style={{marginTop: 24}}>Or Upload Blog JSON</h4>
      <input
        type="file"
        accept="application/json"
        style={styles.input}
        onChange={handleJsonFileChange}
      />
      {jsonError && <div style={{ color: 'red', marginTop: 8 }}>{jsonError}</div>}
      {jsonPreview && (
        <pre style={{
          background: '#f4f4f4',
          padding: '12px',
          borderRadius: '6px',
          marginTop: 8,
          maxHeight: 200,
          overflow: 'auto',
          fontSize: 13
        }}>{jsonPreview}</pre>
      )}

      <div style={{marginTop: 18}}>
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Saving...' : (initial ? 'Update Blog' : 'Create Blog')}
        </button>
        {onCancel && (
          <button type="button" style={{...styles.button, background: '#888', marginLeft: 10}} onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default function AdminBlogDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editBlog, setEditBlog] = useState<any>(null);
  const [formLoading, setFormLoading] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector(selectBlogs);
  const loading = useSelector(selectBlogsLoading);

  // Use refs to persist savedEmail and savedPass across renders
  const [savedEmail, setSavedEmail] = useState<string>('');
  const [savedPass, setSavedPass] = useState<string>('');

  // Check localStorage for admin login
  useEffect(() => {
    const email = typeof window !== 'undefined' ? localStorage.getItem('tetra_admin_email') : '';
    const pass = typeof window !== 'undefined' ? localStorage.getItem('tetra_admin_pass') : '';
    setSavedEmail(email || '');
    setSavedPass(pass || '');
    if (email === ADMIN_EMAIL && pass === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      dispatch(fetchBlogs({}));
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginEmail === ADMIN_EMAIL && loginPassword === ADMIN_PASSWORD) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('tetra_admin_email', loginEmail);
        localStorage.setItem('tetra_admin_pass', loginPassword);
      }
      setSavedEmail(loginEmail);
      setSavedPass(loginPassword);
      setIsLoggedIn(true);
      dispatch(fetchBlogs({}));
    } else {
      alert('Invalid credentials');
    }
  };

  // Logout
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('tetra_admin_email');
      localStorage.removeItem('tetra_admin_pass');
    }
    setSavedEmail('');
    setSavedPass('');
    setIsLoggedIn(false);
  };

  // Create blog
  const handleCreateBlog = async (formData: FormData) => {
    setFormLoading(true);
    try {
      await dispatch(createBlog(formData)).unwrap();
      setShowForm(false);
      setEditBlog(null);
      dispatch(fetchBlogs({}));
      alert('Blog created successfully!');
    } catch (err) {
      alert('Failed to create blog');
    }
    setFormLoading(false);
  };

  // Edit blog
  const handleEditBlog = async (formData: FormData) => {
    setFormLoading(true);
    try {
      await dispatch(updateBlog({ id: editBlog?._id || editBlog?.data?._id, formData })).unwrap();
      setShowForm(false);
      setEditBlog(null);
      dispatch(fetchBlogs({}));
      alert('Blog updated successfully!');
    } catch (err) {
      alert('Failed to update blog');
    }
    setFormLoading(false);
  };

  // Delete blog
  const handleDeleteBlog = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await dispatch(deleteBlog(id)).unwrap();
        dispatch(fetchBlogs({}));
        alert('Blog deleted!');
      } catch (err) {
        alert('Failed to delete blog');
      }
    }
  };

  // Edit button: ask for admin credentials again
  const handleEditPrompt = (blog: any) => {
    if (savedEmail === ADMIN_EMAIL && savedPass === ADMIN_PASSWORD) {
      setEditBlog(blog);
      setShowForm(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={styles.loginBox}>
        <h2 style={{marginBottom: 18}}>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      <h1 style={{marginBottom: 10}}>Blog Admin Dashboard</h1>
      {!showForm && (
        <button
          style={{...styles.button, marginBottom: 18, marginTop: 10}}
          onClick={() => { setShowForm(true); setEditBlog(null); }}
        >
          + Create New Blog
        </button>
      )}
      {showForm && (
        <BlogForm
          onSubmit={editBlog ? handleEditBlog : handleCreateBlog}
          initial={editBlog}
          loading={formLoading}
          onCancel={() => { setShowForm(false); setEditBlog(null); }}
        />
      )}
      <h2 style={{marginTop: 30, marginBottom: 10}}>All Blogs</h2>
      <div style={{overflowX: 'auto'}}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Slug</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Featured</th>
              <th style={styles.th}>Views</th>
              <th style={styles.th}>Likes</th>
              <th style={styles.th}>Created</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={9} style={styles.td}>Loading...</td>
              </tr>
            ) : blogs.length === 0 ? (
              <tr>
                <td colSpan={9} style={styles.td}>No blogs found.</td>
              </tr>
            ) : (
              blogs.map((blog: any) => (
                <tr key={blog._id}>
                  <td style={styles.td}>{blog.title}</td>
                  <td style={styles.td}>{blog.slug}</td>
                  <td style={styles.td}>{blog.category}</td>
                  <td style={styles.td}>{blog.status}</td>
                  <td style={styles.td}>{blog.featured ? 'Yes' : 'No'}</td>
                  <td style={styles.td}>{blog.views}</td>
                  <td style={styles.td}>{blog.likes}</td>
                  <td style={styles.td}>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ''}</td>
                  <td style={styles.td}>
                    <button
                      style={{...styles.actionBtn, ...styles.editBtn}}
                      onClick={() => handleEditPrompt(blog)}
                    >
                      Edit
                    </button>
                    <button
                      style={{...styles.actionBtn, ...styles.deleteBtn}}
                      onClick={() => handleDeleteBlog(blog._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


