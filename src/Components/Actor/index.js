import React, { useEffect, useState } from "react";

import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { useActor } from "../../Hooks/UseActor";
import person from "../../Image/persons.svg";
import { Loader } from "../UI/Loader";
export const Actor = () => {
  const {
    setShowActors,
    movieId,
    API_KEY,
    getActors,
    language,
    saveLanguage,
    showActors,
  } = useActor();
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    getActors(API_KEY, movieId, language).then((data) => setShowActors(data));

    setTimeout(() => {
      setShowImage(true);
    }, 2000);
  }, [movieId, language]);
  return (
    <>
      <div className="act">
        <div className="container">
          <div className="posts mt-12 w-full">
            <h4 className="mb-4 text-2xl font-medium">
              {saveLanguage ? "В главных ролях" : "Top Billed Cast"}
            </h4>
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={18}
              slidesPerView={7.4}
              scrollbar={{ draggable: true }}
              className="flex"
            >
              {showActors.map((el, idx) => (
                <SwiperSlide key={idx}>
                  <div className="posts overflow-hidden">
                    <div className="images">
                      <Link className=" w-full h-full" to={`/person/${el.id}`}>
                        {showImage ? (
                          <img
                            src={
                              el.profile_path && el.profile_path.length > 0
                                ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`
                                : person
                            }
                            alt=""
                          />
                        ) : (
                          <div className=" w-full h-full flex items-center justify-center">
                            <Loader />
                          </div>
                        )}
                      </Link>
                    </div>
                    <div className="title">
                      <h6>{el.name}</h6>
                      <h4>{el.character}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <h4 className="text-black hover:opacity-[.65] duration-[.35s] font-medium text-2xl">
                {saveLanguage
                  ? "Полный состав актеров и съемочной группы"
                  : "Full Cast & Crew"}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
