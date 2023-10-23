import React from "react";
import PropTypes from "prop-types";

const SongLink = ({ song }) => {
  return (
    <div>
      {song && (
        <a
          role="button"
          className="btn"
          href={song}
          target="_blank"
          rel="noopener noreferrer"
        >
          🎸
        </a>
      )}
    </div>
  );
};

SongLink.propTypes = {
  song: PropTypes.string, // Assuming song is a URL string
};

export default SongLink;
