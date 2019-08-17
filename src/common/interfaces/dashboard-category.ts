import DashboardRoute from './dashboard-route';

export default interface DashboardCategory {
  id: string;
  children: DashboardRoute[];
}
