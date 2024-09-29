import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/CarouselPage.css';

const CarouselPage = () => {
  const [images, setImages] = useState([]); // Store images from API
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDetails, setImageDetails] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch images from API on component mount
  useEffect(() => {
    fetch('https://untitled-twkmuar27a-uc.a.run.app/api', {
      method: 'GET',
      headers: {
        Authorization: 'Token 97848e8babeb149f26a044838f1fcb6f52d60e7b'
      }
    })
      .then(response => response.json())
      .then(data => {
        setImages(data); // Set the images fetched from the API
        // Delay hiding the loading spinner
        setTimeout(() => {
          setLoading(false);
        }, 500); // 500ms delay
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false); // Ensure loading is set to false in case of error
      });
  }, []);

  // Function to handle image click
  const handleImageClick = (imageSrc, title, createdAt, details) => {
    setSelectedImage(imageSrc);
    setImageTitle(title); // Set the title of the image
    setCreatedAt(createdAt); // Set the created_at date of the image
    setImageDetails(details);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setImageDetails('');
    setImageTitle('');
    setCreatedAt('');
  };

  // Helper function to split images into chunks of 3
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  // Group images into rows of 3
  const imageRows = chunkArray(images, 3);

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark text-white">
      {loading ? (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row w-100 d-flex justify-content-center">
          {/* Left Section */}
          <div className="text-start my-auto mb-5">
            <div className="logo mb-3">
              <i className="fas fa-layer-group fa-2x"></i>
              <h5 className="d-inline ms-2">TEST</h5>
            </div>
            <h2>Welcome <strong>Test</strong></h2>
            <p>Hope you are having a good day!</p>
          </div>

          {/* Carousel Section */}
          <div className="col-12 col-md-12">
            <h3 className="mb-4">Photography</h3>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {imageRows.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-current={index === 0 ? 'true' : 'false'}
                  />
                ))}
              </div>

              <div className="carousel-inner">
                {imageRows.map((row, rowIndex) => (
                  <div key={rowIndex} className={`carousel-item ${rowIndex === 0 ? 'active' : ''}`}>
                    <div className="row">
                      {row.map(image => (
                        <div className="col-4" key={image.id} onClick={() => handleImageClick(image.image_url, image.title, image.created_at, image.content)}>
                          <img
                            src={image.image_url}
                            className="d-block w-100"
                            alt={`Slide ${image.id}`}
                            style={{ height: '400px', cursor: 'pointer' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Section */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={handleCloseModal}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">{imageTitle}</h5> {/* Display title in modal */}
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body text-center">
                <img src={selectedImage} alt="Selected" className="img-fluid mb-3" />
                <p>{imageDetails}</p>
                <p><strong>Created at:</strong> {new Date(createdAt).toLocaleDateString()}</p> {/* Display created_at */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselPage;
