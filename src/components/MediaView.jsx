import React, { useState } from 'react';
import { ImageList, ImageListItem, Box, Button } from '@mui/material';
import MediaModal from './MediaModal';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import './MediaView.css';

const MediaView = ({ data, category }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideshowMode, setSlideshowMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDuration, setSlideDuration] = useState(3);

  const filteredData = data.filter(
    item => item.category === category || category === 'all'
  );

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
    setIsModalOpen(false);
  };

  const startSlideshow = () => {
    setSlideshowMode(true);
    setCurrentSlide(0);
  };

  React.useEffect(() => {
    let slideInterval;
    if (slideshowMode && filteredData.length > 0) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredData.length);
      }, slideDuration * 1000);
    }

    return () => {
      if (slideInterval) clearInterval(slideInterval);
    };
  }, [slideshowMode, filteredData.length, slideDuration]);

  const handleSlideshowEnd = () => {
    setSlideshowMode(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredData.length) % filteredData.length);
  };

  return (
    <div className="containerGeneral">
      <div className="containerImage">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Button
              startIcon={<SlideshowIcon />}
              variant="contained"
              color="inherit"
              onClick={startSlideshow}

              sx = {{
                mt: 2,
                mr: 2  
              }}
            >
              Start Slideshow
            </Button>
            <Box >
              <label >Slide Duration (seconds): </label>
              <input
                type="number"
                value={slideDuration}
                onChange={(e) => setSlideDuration(Number(e.target.value))}
                min="1"
                max="10"
              />
            </Box>
          </Box>

          {slideshowMode ? (
  <Box sx={{ textAlign: "center", mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src={filteredData[currentSlide].url}
      alt={filteredData[currentSlide].title}
      style={{
        maxWidth: "100%",
        maxHeight: "70vh",
        objectFit: "contain",
      }}
    />
    <Box sx={{ mt: 4 }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSlideshowEnd}
      >
        End Slideshow
      </Button>
    </Box>
  </Box>
) : (
  <ImageList sx={{ width: 900, height: 750 }} cols={3} gap={8}>
    {filteredData.map((item, index) => (
      <ImageListItem
        key={item.url}
        onClick={() => {
          setCurrentSlide(index);
          handleMediaClick(item);
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "#d6d3d3",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s ease",
          borderRadius: "8px",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        {item.type === 'image' ? (
          <img
            src={item.url}
            alt={item.title}
            loading="lazy"
            style={{
              borderRadius: "8px",
              width: "100%",
              height: "auto",
            }}
          />
        ) : (
          <img
            src={item.thumbnail}
            alt={item.title}
            loading="lazy"
            style={{
              borderRadius: "8px",
              width: "100%",
              height: "auto",
            }}
          />
        )}
      </ImageListItem>
    ))}
  </ImageList>
)}


          <MediaModal
            open={isModalOpen}
            handleClose={handleCloseModal}
            media={filteredData[currentSlide]} 
            onNext={handleNext} 
            onPrev={handlePrev} 
          />
        </Box>
      </div>
    </div>
  );
};

export default MediaView;