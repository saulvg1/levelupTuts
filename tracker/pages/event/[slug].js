import { useRouter } from 'next/router';
//component imports
import Layout from '../../components/Layout.js';
export default function event() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <h1>{slug}</h1>
    </Layout>
  );
}
