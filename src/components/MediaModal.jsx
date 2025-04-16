import React, { useState } from "react";
import { Modal, Box, IconButton, Backdrop, Fade } from "@mui/material";
import {
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import ReactPlayer from "react-player";


const MediaModal = ({ open, handleClose, media, onNext, onPrev }) => {
  const [zoom, setZoom] = useState(1);

  if (!media) return null;

  const handleZoomIn = () => {
    setZoom((prevZoom) => {
      const newZoom = prevZoom * 1.1;
      return newZoom <= 2 ? newZoom : 2;
    });
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => {
      const newZoom = prevZoom / 1.1;
      return newZoom >= 1 ? newZoom : 1;
    });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) scale(${zoom}) translateY(${zoom > 1 ? "-10px" : "0"})`,
    transformOrigin: "center center",
    maxWidth: "90%",
    maxHeight: "90%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    outline: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {media.type === "image" ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={media.url}
                alt={media.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  transform: `scale(${zoom})`,
                  transition: "transform 0.3s ease",
                }}
              />
              <Box sx={{ mt: 2 }}>
                <IconButton onClick={handleZoomIn}>
                  <ZoomInIcon />
                </IconButton>
                <IconButton onClick={handleZoomOut}>
                  <ZoomOutIcon />
                </IconButton>
              </Box>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxHeight: "90vh",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transform: `scale(${zoom})`,
                transformOrigin: "center center",
              }}
            >
              <ReactPlayer
                url={media.url}
                controls
                playing
                width="100%"
                height="100%"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mt: 2,
            }}
          >
            <IconButton onClick={onPrev}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton onClick={onNext}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default MediaModal;
