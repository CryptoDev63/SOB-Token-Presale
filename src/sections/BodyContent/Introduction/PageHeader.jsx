const PageHeader = ({ pageTitle }) => {
  return (
    <h2 className="flex justify-start text-white text-[55px] font-bold mb-3">
      {pageTitle && pageTitle}
    </h2>
  );
};

export default PageHeader;
