import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { CheckCircle, UploadFile, Article, AttachMoney } from '@mui/icons-material';
import './Status.css';

const Status = () => {
  const timelineEvents = [
    { date: '1/12/2015', title: 'Registration', status: 'Completed', icon: <CheckCircle /> },
    { date: '8/1/2016', title: 'Document Upload', status: 'Completed', icon: <UploadFile /> },
    { date: '10/2/2016', title: 'Document Verified', status: 'In progress', icon: <Article /> },
    { date: '14/3/2016', title: 'Payment Allocation', status: 'In progress', icon: <AttachMoney /> },
  ];

  return (
    <div className="timeline-container">
      <Typography className="timeline-title">STATUS</Typography>
      <Timeline position="alternate">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} className="timeline-item">
            <TimelineOppositeContent>
              <Typography className="timeline-date">{event.date}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className="timeline-separator">
              <TimelineDot>{event.icon}</TimelineDot>
              {index < timelineEvents.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline-box">
                <Typography variant="h6">{event.title}</Typography>
                <Typography className="timeline-status">{event.status}</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Status;
