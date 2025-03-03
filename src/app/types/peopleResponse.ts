export interface Person {
    gender: string;
    name: { title: string; first: string; last: string };
    location: {
      street: { number: number; name: string };
      city: string;
      state: string;
      country: string;
      postcode: string | number;
      coordinates: { latitude: string; longitude: string };
      timezone: { offset: string; description: string };
    };
    email: string;
    phone: string;
    cell: string;
    dob: { date: string; age: number };
    registered: { date: string; age: number };
    id: { name: string; value: string | null };
    picture: { large: string; medium: string; thumbnail: string };
    nat: string;
    login: {
      uuid: string;
      username: string;
      password: string;
    };
  }
  