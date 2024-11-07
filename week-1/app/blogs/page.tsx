import Link from 'next/link';

const Blogs = () => {
  return (
    <div className="p-10 text-slate-50">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/blogs/elon-musk">Elon Musk</Link>
        </li>
        <li>
          <Link href="/blogs/jensen-huang">Jensen Huang</Link>
        </li>
        <li>
          <Link href="/blogs/mark-zuckerberg">Mark Zuckerberg</Link>
        </li>
      </ul>
    </div>
  );
};
export default Blogs;
