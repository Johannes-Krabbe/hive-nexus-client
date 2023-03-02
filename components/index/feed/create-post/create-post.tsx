import { useState } from "react";
import Image from 'next/image'
import { FormError } from "types/types";
import smiley from "/public/assets/images/core/smiley.png";

import { Button } from "components/button/button";
import { TextInput } from "components/index/feed/create-post/text-input/text-input";
import { TextAreaInput } from "components/index/feed/create-post/text-area-input/text-area-input";
import styles from "./create-post.module.scss";

import { request } from 'utils/context';


export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // TODO: getting data from auth/db
  const username = "spacjalex";
  const postId = "123123123";

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  async function createPost(title: string, content: string) {
    try {
      const res = await request.post(`/post/create`, { 'title': title, 'content': content });
      return res
    } catch(err) {
      console.log(err)
    }
  }

  // @ts-ignore
  const handleSubmit = async () => {
    console.log(`submitting createPost: ${title} ${content}`)

    try {
      const res = await createPost(title, content);
      console.log('res: ', res)

    } catch(err) {
      console.log(err)
    }
  }

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
          <p className={styles.Username}>{username}</p>
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
              <Button
                action={'button'}
                variant={'primary'}
                text={'Publish'}
                onClick={() => { handleSubmit() }}
              />
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
