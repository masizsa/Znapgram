import { Models } from "appwrite";
import React from "react";
import { Button } from "../ui/button";

type TopCreatorCardProps = {
  creator: Models.Document;
};
const TopCreatorCard = ({ creator }: TopCreatorCardProps) => {
  console.log(creator);

  return (
    <div className="user-card">
      <img
        src={creator.imageUrl || "/assets/images/profile-placeholder.svg"}
        alt="creator"
        className="h-14 w-14 rounded-full"
      />
      <h4 className="text-xl font-semibold text-center w-full">{creator.name}</h4>
      <p className="shad-form_label">@{creator.username}</p>
      <Button className="shad-button_primary whitespace-nowrap">Follow</Button>
    </div>
  );
};

export default TopCreatorCard;
