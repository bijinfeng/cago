import React from 'react';
import { Button, InputSearch } from '@pingtou/ui';
import { Plus } from 'lucide-react';

export const DashboardGroups: React.FC = () => {
  return (
    <div className="px-9 py-[26px] mb-12">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium">团队</h4>

        <div className="flex items-center">
          <InputSearch size="sm" placeholder="搜索团队" />
          <Button variant="outline" size="sm" className="ml-3 gap-1">
            <Plus size={16} />
            新建团队
          </Button>
        </div>
      </div>
    </div>
  );
};
