interface iUser {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  contacts: iContact[] | [];
}

interface iContact {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  registerDate: string;
}

export type { iUser, iContact };
