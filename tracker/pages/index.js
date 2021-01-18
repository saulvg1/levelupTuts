import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { withApollo } from '../lib/apollo.js';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
//component imports
import Layout from '../components/Layout.js';
import HabitList from '../components/habitList.js';
import HabitForm from '../components/HabitForm.js';

const HELLO_QUERY = gql`
  query helloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  const [habits, setHabits] = useState(['Do the Dishes']);
  if (loading) return <div />;

  return (
    <Layout className={styles.container}>
      <div className={styles.list}>
        <h1 className={styles.title}>Level Up Your Life</h1>
        <HabitForm setHabits={setHabits} />
        <HabitList habits={habits} />
      </div>
    </Layout>
  );
};
export default withApollo(Home);
