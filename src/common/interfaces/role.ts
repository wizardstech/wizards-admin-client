import Permission from './permission';

export default interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}
