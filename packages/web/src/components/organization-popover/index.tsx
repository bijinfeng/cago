import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger, Button, cn } from '@pingtou/ui';
import { Link, useNavigate } from 'react-router-dom';
import { useGloablStore } from '@/store/global';
import { getImageUrl } from '@/lib/utils';
import { IconButton } from '@/components/icon-button';
import { ChevronDown, Check, Plus } from 'lucide-react';

interface OrganizationPopoverProps {
  isCollapsed?: boolean;
  className?: string;
}

export const OrganizationPopover: React.FC<OrganizationPopoverProps> = ({ isCollapsed, className }) => {
  const { organizations, organization } = useGloablStore();
  const navigate = useNavigate();

  const addOrganization = () => {
    navigate('/organization/new');
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className={cn('flex items-center', className)}>
          <Link to="/dashboard">
            <img src={getImageUrl(organization!.logo!.url!)} alt="logo" className="w-7 h-7 rounded" />
          </Link>
          {!isCollapsed && (
            <>
              <span className="ml-1.5 text-sm max-w-40 font-medium truncate">{organization?.name}</span>
              <IconButton size="icon" className="w-[18px] h-[18px] ml-0.5">
                <ChevronDown size={16} />
              </IconButton>
            </>
          )}
        </div>
      </HoverCardTrigger>

      <HoverCardContent align="start" side={isCollapsed ? 'left' : 'bottom'}>
        <h4 className="mb-4 text-xs">空间</h4>
        <div className="space-y-1">
          {organizations.map((item) => (
            <div
              className="flex items-center px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer gap-3"
              key={item.id}
            >
              <img src={getImageUrl(item.logo!.url!)} alt="logo" className="w-8 h-8 rounded" />
              <div className="flex-1">
                <div className="text-sm">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.members_count}成员</div>
              </div>
              <Check size={14} />
            </div>
          ))}

          <div
            className="flex items-center px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer gap-3"
            onClick={addOrganization}
          >
            <Button size="icon" className="w-8 h-8" variant="outline">
              <Plus size={16} />
            </Button>
            <span className="text-sm">创建空间</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
