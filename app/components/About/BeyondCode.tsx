import {
  FaLeaf,
  FaCameraRetro,
  FaBookOpen,
  FaBrain,
  FaLock,
  FaCodeBranch,
} from "react-icons/fa";
import { GiLotus, GiBookshelf, GiBirdTwitter } from "react-icons/gi";

export default function BeyondCode() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-4xl font-bold mb-6 text-accent">🌌 Beyond Code</h2>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Most of the time, I’m not just coding — I’m exploring the roots of
          human history, how civilization evolved, and how human nature works.
          Metaphysical questions like the existence of God, the universe, space,
          time, and life fascinate me deeply.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <FaLeaf className="text-green-600 text-xl mt-1" />
            <span>
              <strong>Gardening:</strong> Growing and caring for plants gives me
              peace and a sense of life’s rhythm.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCameraRetro className="text-blue-600 text-xl mt-1" />
            <span>
              <strong>Nature Photography:</strong> Capturing trees, birds, and
              ponds keeps me mindful and connected to nature.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaBookOpen className="text-purple-600 text-xl mt-1" />
            <span>
              <strong>Reading:</strong> Passionate about human evolution,
              civilization, religion, and philosophy — ideas that shape our
              world.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <GiLotus className="text-pink-600 text-xl mt-1" />
            <span>
              <strong>Spiritual Exploration:</strong> I’m intrigued by Sufism
              and believe spiritual meditation can unlock nature’s secrets.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaBrain className="text-orange-600 text-xl mt-1" />
            <span>
              <strong>Deep Reflection:</strong> My worldview oscillates between
              religion and agnosticism — always open to new perspectives.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaLock className="text-gray-600 text-xl mt-1" />
            <span>
              <strong>Ethical Hacking:</strong> As a hobbyist, I study
              cybersecurity to understand and strengthen digital systems — not
              exploit them.
            </span>
          </li>
        </ul>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2">
            <GiBookshelf className="inline text-indigo-500 mr-2" />
            Personal Library
          </h3>
          <p>
            I’m building a personal library filled with fundamental books on
            philosophy, psychology, evolution, quantum mechanics, history,
            literature (Kafka, Tolstoy, Dostoyevsky, Orwell), theology, and
            programming. One day, I’ll open it for public discussion — a small
            intellectual hub to enrich minds.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2">
            <GiBirdTwitter className="inline text-teal-500 mr-2" />
            Nature Collection
          </h3>
          <p>
            I have a vast collection of nature photography — trees, birds, wild
            landscapes. My dream is to build a site showcasing these natural
            wonders.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2">
            <FaCodeBranch className="inline text-yellow-500 mr-2" />
            The Tech Side
          </h3>
          <p>
            I’m working hard to level up to a mid-level developer, focusing on
            performance optimization, architecture, and mastering modern tools
            like Vite, Webpack, and Turbo. I try to walk more than 5 km a day
            for balance and energy.
          </p>
        </div>
      </div>
    </section>
  );
}
