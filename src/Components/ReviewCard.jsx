import { Icon } from '@iconify/react';

function Stars({ value = 0 }) {
  return (
    <div className="flex gap-1 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <Icon
          key={i}
          icon={i < value ? 'mdi:star' : 'mdi:star-outline'}
          className="w-4 h-4"
        />
      ))}
    </div>
  );
}

export default function ReviewCard({ item }) {
  return (
    <article className="shrink-0 w-[260px] sm:w-[300px] md:w-[330px] rounded-2xl bg-white px-5 py-4
                        shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          {item.avatar && (
            <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
          )}
        </div>
        <div className="h3-responsive">{item.name}</div>
      </div>
      <Stars value={item.rating} />
      <p className="mt-2 p-responsive leading-snug">{item.text}</p>
    </article>
  );
}
