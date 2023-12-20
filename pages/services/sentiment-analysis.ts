import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export default function analyzeSentiment(text: string) {
  const result = sentiment.analyze(text);

  /* future implementation... use array from positive for keywords */
  // console.log(result.positive);

  return result.score;
}