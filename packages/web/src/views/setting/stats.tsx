import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@pingtou/ui';
import { ChevronDown } from 'lucide-react';
import { isNumber } from 'radash';
import React from 'react';
import ActivityCalendar from 'react-activity-calendar';
import { activityData } from './mock';
import { ACTIVITY_CALENDAR_THEME } from '@/lib/constants';
import { useTheme } from '@/components/theme';

const Stats: React.FC = () => {
  const { themeMode } = useTheme();

  const renderCardOne = (name: string, count?: number) => {
    const countText = isNumber(count) ? count.toLocaleString() : '--';
    return (
      <div className="flex items-center justify-between rounded-lg p-4 bg-muted">
        <p className="text-muted-foreground text-sm">{name}</p>
        <p className="leading-6 text-[22px] font-semibold">{countText}</p>
      </div>
    );
  };

  const renderCardTwo = (name: string, count?: number) => {
    const countText = isNumber(count) ? count.toLocaleString() : '--';

    return (
      <div className="rounded-[6px] p-2 bg-muted">
        <p className="leading-[30px] text-[22px] font-semibold">{countText}</p>
        <p className="text-muted-foreground text-sm mt-0.5">{name}</p>
      </div>
    );
  };

  return (
    <>
      <div className="text-xl font-medium">👋 kebai，这是你和语雀相伴的第 1118 天</div>
      <div className="mt-3 text-sm font-normal text-muted-foreground">
        数据更新至 2024-03-21（每日上午更新昨日数据，&quot;--&quot;表示暂无数据）
      </div>
      <div
        className="border p-6 rounded-xl mt-8"
        style={{
          backgroundImage: 'linear-gradient(180deg,rgba(246,252,254,.69),hsla(0,0%,100%,0))',
        }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-medium">数据总览</h2>
            <p className=" text-sm font-normal mt-1 text-muted-foreground">
              你的每一份成长都被记录
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-sm">历史</span>
                <ChevronDown size={16} className="text-muted-foreground" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-24 min-w-24" align="start">
              <DropdownMenuItem>近 1 年</DropdownMenuItem>
              <DropdownMenuItem>近 30 天</DropdownMenuItem>
              <DropdownMenuItem>历史</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-4">
          {renderCardOne('创作天数', 105)}
          {renderCardOne('创作字数', 51114)}
          {renderCardOne('内容更新', 2491)}
          {renderCardOne('获得点赞', 2)}
        </div>
      </div>

      <div className="flex gap-10 mt-8">
        <div className="flex-1 p-6 border rounded-xl">
          <h2 className="text-lg font-medium">个人知识创作</h2>
          <div className="mt-8 grid grid-cols-3 gap-2 gap-x-2 gap-y-4">
            {renderCardTwo('总字数', 51114)}
            {renderCardTwo('文档', 72)}
            {renderCardTwo('知识库', 10)}
            {renderCardTwo('小计', 25)}
          </div>
        </div>
        <div className="flex-1 p-6 border rounded-xl">
          <h2 className="text-lg font-medium">对外知识分享</h2>
          <div className="mt-8 grid grid-cols-3 gap-x-2 gap-y-4">
            {renderCardTwo('公开文档', 43)}
            {renderCardTwo('阅读量', 179)}
            {renderCardTwo('点赞量')}
            {renderCardTwo('评论量')}
          </div>
        </div>
      </div>

      <div className="border rounded-xl p-6 mt-8">
        <h2 className="text-lg font-medium mb-6">创作指数</h2>
        <ActivityCalendar
          data={activityData}
          theme={ACTIVITY_CALENDAR_THEME}
          colorScheme={themeMode}
          maxLevel={5}
          blockMargin={5}
          hideTotalCount={true}
          blockSize={14}
          labels={{
            months: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月',
            ],
            legend: { less: '不活跃', more: '活跃' },
          }}
          renderBlock={(block, activity) => (
            <Tooltip>
              <TooltipTrigger asChild>{block}</TooltipTrigger>
              <TooltipContent>{activity.count}</TooltipContent>
            </Tooltip>
          )}
        />
      </div>
    </>
  );
};

export default Stats;
