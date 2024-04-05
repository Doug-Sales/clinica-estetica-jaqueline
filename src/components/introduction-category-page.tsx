import descriptionServiceClinic from '@/assets/img/clinic/description-clinic-img.jpg'

interface ImageGroupProps {
  title: string
  text: string
  images: string[]
}

const ImageGroup: React.FC<ImageGroupProps> = ({ title, text, images }) => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 lg:space-x-14">
      <div className="flex max-w-[580px] flex-col justify-center">
        <h4 className=" mb-6 mt-8  text-left  text-3xl">{title}</h4>
        <p className="whitespace-pre-line pb-10 text-left text-lg">{text}</p>
      </div>

      <div className=" container grid h-fit max-w-[450px] grid-cols-2 gap-1">
        {images.map((imageUrl, index) => (
          <div key={index} className="bg-foreground/65 p-2 ">
            <img
              src={imageUrl}
              alt="Description service image"
              className="w-full border border-foreground"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

interface TextProps {
  title: string
  text: string
}

export function IntroductionCategoryPage({ title, text }: TextProps) {
  // Buscar na categoria
  const images = [
    descriptionServiceClinic,
    descriptionServiceClinic,
    descriptionServiceClinic,
    descriptionServiceClinic,
  ]

  return (
    <section>
      <div className="container grid grid-cols-1 items-center justify-center bg-muted py-20 text-left text-foreground lg:flex">
        <div>
          <ImageGroup title={title} text={text} images={images} />
        </div>
      </div>
    </section>
  )
}
