import { useState } from "react";
import { FormError } from "types/types";

import { Button } from "components/button/button";
import { TextInput } from "components/index/feed/create-post/text-input/text-input";
import { TextAreaInput } from "components/index/feed/create-post/text-area-input/text-area-input";
import styles from "./create-post.module.scss";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // TODO: getting data from auth/db
  const username = "spacjalex";
  const createdAt = "17.02.2023";
  const postId = "123123123";

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setShowSuccessMessage(true)

    // console.log('showSuccessMessage:')
    // console.log(showSuccessMessage)
    console.log("CreatePost Content, submitting:");
    console.log(`postId: ${postId}`);
    console.log(`createdAt: ${createdAt}`);
    console.log(`username: ${username}`);
    console.log(`title: ${title}`);
    console.log(`content: ${content}`);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div className={styles.TitleBar}>
          <p>Write your Post! 📃</p>
        </div>
        <div className={styles.DetailsBar}>
          <p className={styles.Username}>{username}</p>
          <p>{createdAt}</p>
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
              // @ts-ignore
              onChange={(e) => {
                setTitle(e.target.value);
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
              // @ts-ignore
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <div className={styles.ButtonContainer}>
              <Button action="submit" variant="primary" text="Publish" />
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
