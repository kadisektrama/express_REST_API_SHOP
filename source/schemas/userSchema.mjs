export const createUserSchema = {
    'type': 'object',
    'properties': {
        'first_name': {
            'type': 'string',
            'minLength': 6,
        },
        'last_name': {
            'type': 'string',
            'minLength': 6,
        },
        'role': {
            //'enum': ['guest', 'host', 'admin'],
            'type': 'string',
        },
        'user_name': {
            'type': 'string',
            'minLength': 6,
        },
        'email': {
            //'format': 'email',
            'type': 'string',
            'minLength': 6,
        },
        'phone': {
            //'format': 'phone',
            'type': 'string',
            'minLength': 6,
        },
        'image': {
            'type': 'object',
        },
    },
    'required': ['first_name', 'last_name', 'role'],
    'additionalProperties': false,
}