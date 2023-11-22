const NotFound = () => {
  return (
    <section className="w-full flex justify-center items-center mt-4 max-sm:px-3 px-32">
      <section>
        <h1 className="text-center max-sm:text-3xl text-4xl max-sm:leading-10">
          No movies that match that name. Please searh for something else.
        </h1>
      </section>
    </section>
  );
};

export default NotFound;
