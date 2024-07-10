import * as Joi from 'joi';

export const joiValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  MONGODB: Joi.string().required(),
  DEFAULT_LIMIT: Joi.number().default(10),
});
