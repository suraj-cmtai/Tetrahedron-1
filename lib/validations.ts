// lib/validations.ts
import Joi from 'joi';

export const blogValidationSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),
  slug: Joi.string().min(3).max(200).required(),
  sections: Joi.array().min(1).items(Joi.object({
    heading: Joi.string().min(1).max(100).required(),
    content: Joi.array().min(1).items(Joi.string().required()).required()
  })).required(),
  cta: Joi.object({
    buttonText: Joi.string().max(50),
    text: Joi.string()
  }).optional(),
  status: Joi.string().valid('draft', 'published', 'archived').default('draft'),
  featured: Joi.boolean().default(false),
  tags: Joi.array().items(Joi.string()),
  category: Joi.string().optional(),
  metaDescription: Joi.string().max(160).optional()
});
