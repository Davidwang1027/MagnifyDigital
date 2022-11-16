// This code is commented on DEC 23, 2021 now all the notifications are getting rendered
// based on the apps/client/src/components/notifications/report_notification_content.tsx
// This code can be deleted after regression testing..
// import React, { FC } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Notification } from './';

// export const NewUpdateNotification: FC = () => {
//   const { t } = useTranslation();

//   const staticNotificationsData = [
//     {
//       key: 'new-update-coming-bug-fix',
//       title: t('SOFTWARE_UPDATE_COMING'),
//       subTitle: t('NOTIFICATION_BUG_FIXES_SUBTITLE'),
//       content: t('NOTIFICATION_BUG_FIXES_CONTENT'),
//       buttonTitle: null,
//       url: null,
//       created_at: '2022/11/16',
//     },
//     {
//       key: 'new-update-coming',
//       title: t('SOFTWARE_UPDATE_COMING'),
//       subTitle: null,
//       content: t('SOFTWARE_UPDATE_BLURB'),
//       buttonTitle: t('RELEASE_NOTES_ACTION_TEXT'),
//       url: '/release-notes',
//       created_at: '2022/11/16',
//     },
//   ];

//   return (
//     <div>
//       {staticNotificationsData.map((notification) => {
//         return (
//           <Notification
//             key={notification.key}
//             title={t('SOFTWARE_UPDATE_COMING')}
//             isStaticNotification
//             notification={{ created_at: notification.created_at }}
//             isViewed={false}
//             staticNotificationContent={notification.content}
//             staticNotificationSubTitle={notification.subTitle}
//             staticNotificationButtonTitle={notification.buttonTitle}
//             staticNotificationButtonUrl={notification.url}
//           />
//         );
//       })}
//     </div>
//   );
// };
