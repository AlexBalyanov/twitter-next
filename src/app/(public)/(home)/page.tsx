import Tweet from "@/app/(public)/(home)/Tweet";
import {TWEETS} from "@/shared/data/tweets.data";
import TweetForm from "@/app/(public)/(home)/TweetForm";


export default function Home() {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Home</h1>
      <TweetForm />
        <div className="space-y-6">
          {TWEETS.map((tweet, index) => {
            return <Tweet key={index} text={tweet.text} author={tweet.author} />
          })}
        </div>
      </div>
  );
}
