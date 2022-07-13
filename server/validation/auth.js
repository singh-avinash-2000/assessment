const joi = require('joi')

exports.SignUpSchema = joi.object({
	first_name: joi.string().trim().required(),
	last_name: joi.string().trim().required(),
	email: joi
		.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net', 'in', 'org'] },
		})
		.required(),
	phone_number: joi.number().required(),
	city: joi.string(),
	password: joi.string().required(),
})

exports.SignInSchema = joi.object({
	email: joi
		.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net', 'in', 'org'] },
		})
		.required(),
	password: joi.string().required(),
})

exports.CreateMomentSchema = joi.object({
	title: joi.string().trim().required(),
	tags: joi.array().items(joi.string()).required(),
	file_name: joi.any().required(),
})
