/**
 * Props for the WorkspaceModalContent component.
 */
type WorkspaceModalContentProps = {
  /** Name of the workspace */
  workspaceName: string;

  /** Setter function for the workspace name */
  setWorkspaceName: (workspaceName: string) => void;
};

/**
 * A content component for a modal to set the name of a workspace.
 *
 * @param {WorkspaceModalContentProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered JSX element.
 */
const WorkspaceModalContent = (
  props: WorkspaceModalContentProps
): JSX.Element => {
  return (
    <div>
      <label
        htmlFor="workspace_name"
        className="block font-medium leading-6 text-black dark:text-white text-md"
      >
        Workspace Name
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="workspace_name"
          id="workspace_name"
          className="block w-full magick-input"
          placeholder="My Workspace"
          value={props.workspaceName}
          onChange={(e) => props.setWorkspaceName(e.target.value)}
        />
        <span className="text-xs text-red-500">
          {props.workspaceName.length !== 0 &&
            props.workspaceName.length <= 3 &&
            "Workspace name must be at least 3 characters"}
        </span>
      </div>
    </div>
  );
};

export default WorkspaceModalContent;
