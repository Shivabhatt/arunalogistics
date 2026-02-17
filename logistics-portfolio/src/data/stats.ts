import { Package, Users, MapPin, Clock } from 'lucide-react';

export const stats = [
  {
    id: 1,
    value: 1000000,
    suffix: '+',
    label: 'Shipments Delivered',
    icon: Package,
  },
  {
    id: 2,
    value: 500,
    suffix: '+',
    label: 'Brand Partners',
    icon: Users,
  },
  {
    id: 3,
    value: 200,
    suffix: '+',
    label: 'Cities Covered',
    icon: MapPin,
  },
  {
    id: 4,
    value: 99.5,
    suffix: '%',
    label: 'On-Time Delivery',
    icon: Clock,
  },
];
