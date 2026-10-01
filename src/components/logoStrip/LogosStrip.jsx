import Logo1 from "../../assets/logoStrip1.svg";
import Logo2 from "../../assets/logoStrip2.svg";
import Logo3 from "../../assets/logoStrip3.svg";
import Logo4 from "../../assets/logoStrip4.svg";
import Logo5 from "../../assets/logoStrip5.svg";

export default function LogosStrip() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-[1400px] mx-auto px-5 flex justify-between items-center flex-wrap gap-6">
        <img src={Logo1} alt="Logo 1" className="w-40 h-auto" />
        <img src={Logo2} alt="Logo 2" className="w-40 h-auto" />
        <img src={Logo3} alt="Logo 3" className="w-40 h-auto" />
        <img src={Logo4} alt="Logo 4" className="w-40 h-auto" />
        <img src={Logo5} alt="Logo 5" className="w-40 h-auto" />
      </div>
    </div>
  );
}
