const Progress = ({ percentage }: { percentage: number }) => {
  return (
    <>
      <div className="w-full h-1 max-w-md mx-auto bg-muted-foreground/40 rounded-lg shadow-md">
        <div
          className="h-1 bg-primary"
          style={{ width: percentage + "%" }}
        />
      </div>
    </>
  );
};

export default Progress;