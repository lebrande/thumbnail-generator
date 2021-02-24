import * as React from 'react';
import authorImg from '../../img/author.jpg';
import logoImg from '../../img/logo.png';

export const App = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [title, setTitle] = React.useState('YouTube Cover Generator');
  const [subtitle, setSubtitle] = React.useState('Focus on video production');
  const [authorName, setAuthorName] = React.useState('Jakub Pusiak');

  return (
    <div className="relative">
      {showForm && (
        <form className="p-10 absolute bg-white bottom-0 right-0">
          <label>Title</label>
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            className="block border border-gray-500 rounded px-2 py-1 w-100% w-96 max-w-full"
          />

          <label>Subtitle</label>
          <input
            value={subtitle}
            onChange={({ target }) => setSubtitle(target.value)}
            className="block border border-gray-500 rounded px-2 py-1 w-100% w-96 max-w-full"
          />

          <label>Author</label>
          <input
            value={authorName}
            onChange={({ target }) => setAuthorName(target.value)}
            className="block border border-gray-500 rounded px-2 py-1 w-100% w-96 max-w-full"
          />
        </form>
      )}
      <div
        style={{ fontFamily: 'Teko' }}
        className="bg-gradient-to-r from-blue-900 to-blue-500 p-10 text-white w-screen h-screen"
        onClick={() => setShowForm(!showForm)}
      >
        <div className="flex flex-col h-full space-y-8">
          <div className="flex flex-1 space-x-8">
            <div className="flex-1 pt-2">
              <h1 className="text-7xl">{title || '<type title>'}</h1>
              <h2 className="text-4xl">{subtitle || '<type subtitle>'}</h2>
            </div>
            <img src={logoImg} className="rounded w-24 h-24" />
          </div>
          <div className="flex items-center space-x-8">
            <img src={authorImg} className="rounded-full w-32 h-32" />
            <p className="text-4xl">{authorName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}