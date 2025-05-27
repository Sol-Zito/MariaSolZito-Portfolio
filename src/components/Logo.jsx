const Logo = ({ isLoading }) => {
  return (
    <a href="#home">
      <p
        className={`w-full bg-transparent p-5 font-semibold ${
          isLoading ? "text-white" : "text-dark_primary"
        }  font-Paprika`}
      >
        <span className="text-secondaryLinear">&lt;&gt; </span>
        MSZ
        <span className="text-secondaryLinear"> &lt;/&gt;</span>
      </p>
    </a>
  );
};

export default Logo;
