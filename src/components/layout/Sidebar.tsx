
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Scissors, 
  Video, 
  BarChart3, 
  Settings, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  PlusCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Scissors, label: 'Clipper', path: '/clipper' },
    { icon: Video, label: 'Editor', path: '/editor' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside
      className={cn(
        "h-screen sticky top-0 bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-[80px]" : "w-[250px]"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <Link to="/" className={cn("flex items-center gap-2", collapsed && "justify-center")}>
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-tubeai-purple to-tubeai-teal flex items-center justify-center text-white font-bold">
            T
          </div>
          {!collapsed && <span className="font-bold text-xl">Tube.ai</span>}
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                location.pathname === item.path 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "hover:bg-sidebar-accent/50",
                collapsed && "justify-center px-2"
              )}
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4">
        <Button 
          className={cn(
            "w-full bg-gradient-to-r from-tubeai-purple to-tubeai-teal hover:opacity-90 transition-opacity",
            collapsed && "p-2"
          )}
        >
          <PlusCircle size={18} className="mr-2" />
          {!collapsed && "New Project"}
        </Button>
        <div className="mt-4 flex items-center justify-center">
          <HelpCircle size={20} className="text-sidebar-foreground/70" />
          {!collapsed && <span className="ml-2 text-sm text-sidebar-foreground/70">Help & Support</span>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
