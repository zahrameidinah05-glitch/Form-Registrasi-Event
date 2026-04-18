import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { registerSchema } from "../components/schemas/RegisterSchemas";
import { Button } from "../components/atoms/Button";
import { InputField } from "../components/atoms/InputField";
import { PasswordInput } from "../components/atoms/PasswordInput";
import { SelectInput } from "../components/atoms/SelectInput";
import { TextArea } from "../components/atoms/TextArea";

type InputDataPendaftaran = z.infer<typeof registerSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InputDataPendaftaran>({
    resolver: zodResolver(registerSchema),
  });

  const handleSimpanData = async (data: InputDataPendaftaran) => {
    console.log("cek data masuk:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    alert("Mantap! Data pendaftaran kamu sudah tersimpan.");
    reset(); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
      <div className="bg-red-900 py-3 px-5 text-center">
        <h2 className="text-white font-bold text-xl uppercase tracking-normal"> 
          Form Pendaftaran Event
        </h2>
      </div>

        <div className="p-7">
          <form onSubmit={handleSubmit(handleSimpanData)} className="space-y-4">
            
            <InputField
              label="Nama Lengkap"
              placeholder="Masukkan nama..."
              {...register("username")}
              error={errors.username?.message}
            />

            <InputField
              label="Email Aktif"
              type="email"
              placeholder="nama@gmail.com"
              {...register("email")}
              error={errors.email?.message}
            />

            <PasswordInput
              label="Password"
              placeholder="Min. 8 karakter"
              {...register("password")}
              error={errors.password?.message}
            />

            <SelectInput
              label="Pilihan Kategori"
              {...register("category")}
              error={errors.category?.message}
              options={[
                { value: "Infosary ML", label: "Mobile Legends Tournament" },
                { value: "Infosary Design", label: "UI/UX Design" },
                { value: "Infosary", label: "Futsal" },
              ]}
            />

            <TextArea
              label="Keterangan (Bio)"
              placeholder="Alasan Mengikuti Event..."
              rows={4}
              {...register("bio")}
              error={errors.bio?.message}
            />

            <div className="pt-3">
              <Button type="submit" isLoading={isSubmitting}>
                {isSubmitting ? "Sedang Memproses..." : "Daftar Sekarang"}
              </Button>
            </div>

            <p className="text-[10px] text-center text-gray-400">
              * Pastikan koneksi internet stabil saat mengirim data.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}