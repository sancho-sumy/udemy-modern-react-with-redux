import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure to do this?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today at 6:00PM"
          text="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          time="Monday at 9:00PM"
          text="It's awesome!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          time="Yesterday at 3:00AM"
          text="Post more please..."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
