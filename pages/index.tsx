import { useState } from 'react';
import analyzeSentiment from './services/sentiment-analysis';

const Home = () => {
  const [articleTitle, setArticleTitle] = useState('');
  const [sentimentScore, setSentimentScore] = useState<number | null>(null);

  const analyzeSentimentHandler = () => {
    const score = analyzeSentiment(articleTitle);
    setSentimentScore(score);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">News Article Sentiment Analyzer</h1>
        <label className="block mb-4">
          Enter News Article Title:
          <input
            type="text"
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </label>
        <button
          onClick={analyzeSentimentHandler}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Analyze Sentiment
        </button>
        {sentimentScore !== null && (
          <p className="mt-4">Sentiment Score: {sentimentScore.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default Home;
