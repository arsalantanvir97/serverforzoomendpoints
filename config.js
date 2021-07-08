const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: 'RQxsxS4sRh2qAyeaG_LNEQ',
    APISecret: 'yidp6A4IJTD9je1kjxI6aumOp9FnxoH7AMs4',
  },
  production: {
    APIKey: 'RQxsxS4sRh2qAyeaG_LNEQ',
    APISecret: 'yidp6A4IJTD9je1kjxI6aumOp9FnxoH7AMs4',
  },
}

module.exports = config[env]
