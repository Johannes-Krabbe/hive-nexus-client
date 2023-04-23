import { useState } from "react";
import Image from "next/image";
import { FormError } from "types/types";
import smiley from "/public/assets/images/core/smiley.png";

import { useUser } from "lib/hooks";
import { createPost } from "utils/restClient";

import { Button } from "components/button/button";
import { TextInput } from "components/index/feed/create-post/text-input/text-input";
import { TextAreaInput } from "components/index/feed/create-post/text-area-input/text-area-input";
import styles from "./create-post.module.scss";

export const CreatePost = () => {
  const { user, setUser } = useUser();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async () => {
    const res = await createPost(title, content);
    console.log(res);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div className={styles.TitleBar}>
          <p>Write a Post! 📃</p>
        </div>
        <div className={styles.User}>
          <Image
            className={styles.Avatar}
            // TODO: replace
            src={smiley}
            height={32}
            width={32}
            alt={`Your avatar`}
          />
          <p className={styles.Username}>{user?.username ?? "not logged in"}</p>
        </div>
        <div className={styles.FormWrapper}>
          <form
            id="CreatePost"
            name="Post"
            className={styles.Form}
            onSubmit={handleSubmit}
            method="post"
          >
            <TextInput
              id="title"
              inputType="text"
              name="title"
              placeholder="Title"
              pattern="^(\D+)$"
              errorMessage={FormError.Title}
              title={"title"}
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.currentTarget.value);
              }}
            />
            <TextAreaInput
              id="content"
              formName="CreatePost"
              name="content"
              placeholder="Content"
              errorMessage={FormError.Content}
              title={"content"}
              value={content}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setContent(e.currentTarget.value);
              }}
            />
            <div className={styles.ButtonContainer}>
              <Button action={"button"} variant={"primary"} text={"Publish"} />
            </div>
            {showSuccessMessage ||
              (showFailureMessage && (
                <div className={styles.Confirmation}>
                  <h5 className={styles.Wording}>
                    {showSuccessMessage && "Many thanks for sharing!"}
                    {showFailureMessage && "Oops, something went wrong."}
                  </h5>
                </div>
              ))}
          </form>
        </div>
      </div>
    </div>
  );
};
