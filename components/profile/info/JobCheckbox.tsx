import {JobProps} from "@/lib/interfaces/interface";
import {Field, Checkbox, Label, Description} from "@headlessui/react";

interface JobCheckboxProps {
    job: JobProps;
    checked: boolean;
    onChange: (jobId: number) => void;
}

export default function JobCheckbox({job, checked, onChange}: JobCheckboxProps) {
    return (
        <Field key={job.id} className={"flex items-start gap-2"}>
            <Checkbox
                className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500 mt-1"
                checked={checked}
                onChange={() => onChange(job.id)}
            />
            <div className={"flex flex-col justify-center"}>
                <Label className={"font-medium text-gray-800"}>{job.name}</Label>
                <Description className={"text-gray-500"}>{job.description}</Description>
            </div>
        </Field>
    );
}