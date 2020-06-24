import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4 PM"
          avatarUrl={faker.image.avatar()}
          content={faker.lorem.text()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2 PM"
          avatarUrl={faker.image.avatar()}
          content={faker.lorem.text()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="1d ago"
          avatarUrl={faker.image.avatar()}
          content={faker.lorem.text()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
