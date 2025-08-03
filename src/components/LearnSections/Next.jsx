import Hands from "../../assets/icons/hands.png";
import Yarn from "../../assets/icons/yarn.png";
import Recycle from "../../assets/icons/recycle.png";
import Trash from "../../assets/icons/trash.png";

const Next = () => {
  const actions = [
    { icon: Hands, label: "Trade them with a friend" },
    { icon: Yarn, label: "Fix or reuse them" },
    { icon: Recycle, label: "Recycle them into new stuff" },
    { icon: Trash, label: "Or sadly… throw them away" },
  ];

  return (
    <section className="bg-[#E6F6EC] py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 winky-font">
          What Happens Next?
        </h2>
        <p className="mt-2 text-xl text-gray-600 winky-font">
          When clothes get too small or old, you can
        </p>
      <div className="mt-8 flex flex-col items-start space-y-6 w-max mx-auto">
  {actions.map((action, i) => (
    <div key={i} className="flex items-center space-x-4">
      <img
        src={action.icon}
        alt={action.label}
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
      />
      <span className="text-gray-700 text-base sm:text-lg hover:text-[#4CAF50] hover:cursor-pointer transition-colors duration-200 winky-font">
        {action.label}
      </span>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};
export default Next;
