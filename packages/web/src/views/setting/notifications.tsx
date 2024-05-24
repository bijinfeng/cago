import React from 'react';
import { PREFERENCE_SETTING } from '@/lib/constants';
import { Setting } from '@/components/settings';

function NotificationsSetting() {
  return <Setting options={PREFERENCE_SETTING} />;
}

export default NotificationsSetting;
