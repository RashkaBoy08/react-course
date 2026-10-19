import styles from "./TodoFilters.module.css";

function TodoFilters({ filters, activeFilter, counts, onFilterChange }) {
  return (
    <nav className={styles.filters} aria-label="Filter tasks">
      {filters.map((filter) => (
        <button
          className={`${styles.filter} ${
            activeFilter === filter ? styles.selected : ""
          }`}
          key={filter}
          type="button"
          aria-pressed={activeFilter === filter}
          onClick={() => onFilterChange(filter)}
        >
          {filter[0].toUpperCase() + filter.slice(1)}
          <span className={styles.count}>{counts[filter]}</span>
        </button>
      ))}
    </nav>
  );
}

export default TodoFilters;
