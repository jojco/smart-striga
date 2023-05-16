export default function () {
  const navigationItems: Array<NavigationItem> = [
    {
      icon: 'ri-home-smile-2-line',
      label: 'Home',
      to: '/'
    },
    {
      icon: 'ri-dashboard-2-line',
      label: 'Dashboard',
      to: '/dashboard'
    },
    {
      icon: 'ri-history-line',
      label: 'History',
      to: '/history'
    },
    {
      icon: 'ri-settings-4-line',
      label: 'Settings',
      to: '/settings'
    }
  ];
  return { navigationItems };
}
