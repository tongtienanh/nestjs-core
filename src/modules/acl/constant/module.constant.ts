export class ModuleConstant {
  static setUp() {
    return [
      {
        name: 'Contact',
        description: 'Contact',
        permissions: [
            {
                name: "create contact",
                description: "Create new contact",
            },
            {
                name: "edit contact",
                description: "edit new contact",
            },
            {
                name: "view contact",
                description: "edit new contact",
            }
        ]
      },
      {
        name: 'User',
        description: 'User',
        permissions: [
            {
                name: "create user",
                description: "Create new user",
            },
            {
                name: "edit user",
                description: "edit new user",
            },
            {
                name: "view user",
                description: "edit new user",
            }
        ]
      },
    ];
  }
}
