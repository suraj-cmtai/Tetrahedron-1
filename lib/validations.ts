// lib/validations.ts
import Joi from 'joi';

export const blogValidationSchema = Joi.object({
  //id string or num optional
  id: Joi.alternatives().try(Joi.string().allow(''), Joi.number()).optional(),
  image: Joi.alternatives().try(
    Joi.object({
      url: Joi.string().allow('').optional(),
      publicId: Joi.string().allow('').optional(),
      alt: Joi.string().max(100).allow('').optional()
    }),
    Joi.string().uri().allow('').optional() // or just a string URL
  ).optional(),
  
  title: Joi.string().min(3).max(200).required(),
  slug: Joi.string().min(3).max(200).required(),
  sections: Joi.array().min(1).items(Joi.object({
    heading: Joi.string().min(1).max(100).allow('').optional(),
    content: Joi.array().min(1).items(Joi.allow('').optional()).allow('').optional(),
    // Optional image object with url, publicId, and alt text or image string
    image: Joi.alternatives().try(
      Joi.object({
        url: Joi.string().allow('').optional(),
        publicId: Joi.string().allow('').optional(),
        alt: Joi.string().max(100).allow('').optional()
      }),
      Joi.string().uri().allow('').optional() // or just a string URL
    ).optional()
  })).optional(),
  cta: Joi.object({
    buttonText: Joi.string().max(50).allow('').optional(),
    text: Joi.string().allow('').optional()
  }).optional(),
  status: Joi.string().valid('draft', 'published', 'archived').default('published'),
  featured: Joi.boolean().default(false),
  tags: Joi.array().items(Joi.string().allow('')),
  category: Joi.string().allow('').optional(),
  metaDescription: Joi.string().max(160).allow('').optional()
});
