import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@pingtou/ui';
import dayjs from 'dayjs';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import React from 'react';

const sessions: KB.LoginSession[] = [
  {
    id: 1231,
    accountId: 34324,
    ip: '192.168.1.1',
    location: '中国',
    browser: 'Chrome',
    os: 'Windows',
    createAt: '2024-03-01T07:13:34.000Z',
    isCurrent: true,
  },
  {
    accountId: 12338486,
    browser: 'Desktop',
    createAt: '2024-01-05T08:59:01.000Z',
    id: 724929588,
    ip: '112.132.223.242',
    isCurrent: false,
    location: '中国-安徽-合肥',
    os: 'Windows',
  },
];

const auditlogs: KB.LoginAuditLog[] = [
  {
    id: 457048076,
    ip: '112.132.223.242',
    createAt: '2024-03-01T07:13:34.000Z',
    traceId: 'ac122d2917092772136613358134',
    action: 'login',
  },
  {
    id: 456276369,
    ip: '58.243.165.95',
    createAt: '2024-02-28T14:10:28.000Z',
    traceId: 'ac122d2917092772136613358134',
    action: 'logout',
  },
];

const Safety: React.FC = () => {
  const renderDeviceIcon = (os: string) => {
    if (['Windows', 'macOS'].includes(os)) {
      return <Monitor size={24} className="m-1" />;
    } else if (os === 'pad') {
      return <Tablet size={24} className="m-1" />;
    } else if (['iOS', 'Android'].includes(os)) {
      return <Smartphone size={24} className="m-1" />;
    }

    return <Monitor size={24} className="m-1" />;
  };

  const getActionText = (action: string) => {
    switch (action) {
      case 'login':
        return '账户登录';
      case 'logout':
        return '账户登出';
    }
  };

  return (
    <>
      <div className="text-base font-medium mb-1.5">登录设备</div>
      <div className="text-sm text-muted-foreground">
        删除列表中的设备后，在该设备登录语雀需要进行身份验证
      </div>
      <div className="mt-4 space-y-4">
        {sessions.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 rounded-md bg-secondary text-muted-foreground gap-4"
          >
            {renderDeviceIcon(item.os)}
            <div className="flex-1">
              <div className="flex items-center mb-1.5">
                <span className="text-sm leading-[22px] text-foreground">
                  {item.location} {item.ip}
                </span>
                {item.isCurrent && (
                  <div className="flex items-center ml-2 px-1.5 bg-white rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-primary ml-1 text-xs">当前设备</span>
                  </div>
                )}
              </div>
              <div className=" text-sm leading-[22px]">
                {item.browser} on {item.os} 登录时间{' '}
                {dayjs(item.createAt).format('YYYY-MM-DD HH:mm:ss')}
              </div>
            </div>
            <Button
              variant="outline"
              className="text-xs leading-6 px-2 py-0 h-auto"
              disabled={item.isCurrent}
            >
              删除
            </Button>
          </div>
        ))}
      </div>

      <div className=" mt-14 mb-4 text-base">安全记录</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>详情</TableHead>
            <TableHead>IP 地址</TableHead>
            <TableHead>时间</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {auditlogs.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{getActionText(item.action)}</TableCell>
              <TableCell className="text-muted-foreground">
                IP:
                {item.ip}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {dayjs(item.createAt).format('YYYY-MM-DD HH:mm:ss')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Safety;
