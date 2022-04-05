import { User } from './User';

export const getUser = (): User => {
    return {
        _id: '62427c04cf6d36d4e489610d',
        firstName: 'Sara',
        lastName: 'Andersen',
        picture: 'https://randomuser.me/api/portraits/women/58.jpg'
    } as User;
}
