export default interface DashboardRoute {
  id: string;
  icon: JSX.Element;
  active: boolean;
  slug: string;
  path: string;
  exact: boolean;
  component(): JSX.Element;
}
